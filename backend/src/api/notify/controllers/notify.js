'use strict';

/**
 * A set of functions called "actions" for `notify`
 */
const hasScheduleChanged = (prevSchedule, newSchedule) => {
  // Convert to a Map for faster lookup
  const prevMap = new Map(prevSchedule.map(item => [item.id, item]));

  for (const item of newSchedule) {
      const prevItem = prevMap.get(item.id);
      if (!prevItem) return true; // New item added

      // Check if start or end time has changed
      if (prevItem.start !== item.start || prevItem.end !== item.end) {
          return true;
      }

      // Remove checked item from the map
      prevMap.delete(item.id);
  }

  // If there are any remaining items in prevMap, it means they were deleted
  return prevMap.size > 0;
};

module.exports = {
  async create(ctx) {
    const { username, name, lastname, schedule } = ctx.request.body;
    if (!username || !schedule) return ctx.send({ message: "Username was not provided." });
    // Fetch users interested in this category
    const interestedUsers = await strapi.entityService.findMany(
      "api::subscriber.subscriber",
      {
        filters: {
          provider: username,
        },
      }
    );
    if (!interestedUsers || (Array.isArray(interestedUsers) && !interestedUsers.length)) return ctx.send({ message: "No subscribed users" });
    // Send email to each user
    for (const user of interestedUsers) {
      if (!user.schedule) return ctx.send({ message: "Old schedule data was not provided!" })
      const oldSchedule = typeof user.schedule === 'string' ? JSON.parse(user.schedule) : user.schedule;
      const schedulesDiffer = hasScheduleChanged(oldSchedule, schedule);
      if (schedulesDiffer) {
        strapi.plugins["email"].services.email.send({
          to: user.email,
          from: process.env.SENDGRID_DEFAULT_FROM_EMAIL,
          subject: "User Update",
          text: `Escort ${name} ${lastname} has updated her schedule.`,
        });
        await strapi.entityService.delete("api::subscriber.subscriber", user.id);
      };
    };

    return ctx.send({ message: "Emails sent successfully!" });
  },
}
