import type { Schema, Struct } from '@strapi/strapi';

export interface BlockAccordion extends Struct.ComponentSchema {
  collectionName: 'components_block_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlockArrayData extends Struct.ComponentSchema {
  collectionName: 'components_block_array_data';
  info: {
    description: '';
    displayName: 'arrayData';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface BlockCategory extends Struct.ComponentSchema {
  collectionName: 'components_block_categories';
  info: {
    description: '';
    displayName: 'location';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

export interface BlockFavoritesIds extends Struct.ComponentSchema {
  collectionName: 'components_block_favorites_ids';
  info: {
    displayName: 'favoritesIds';
  };
  attributes: {};
}

export interface BlockIncall extends Struct.ComponentSchema {
  collectionName: 'components_block_incalls';
  info: {
    description: '';
    displayName: 'Rate';
  };
  attributes: {
    general: Schema.Attribute.Component<'elements.data', true>;
    GFE: Schema.Attribute.Component<'elements.data', true>;
    PSE: Schema.Attribute.Component<'elements.data', true>;
  };
}

export interface BlockLevel2 extends Struct.ComponentSchema {
  collectionName: 'components_block_level_2s';
  info: {
    description: '';
    displayName: 'level_2';
  };
  attributes: {
    level_3: Schema.Attribute.Component<'block.level-3', true>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlockLevel3 extends Struct.ComponentSchema {
  collectionName: 'components_block_level_3s';
  info: {
    description: '';
    displayName: 'level_3';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlockLocationCard extends Struct.ComponentSchema {
  collectionName: 'components_block_location_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface BlockRichText extends Struct.ComponentSchema {
  collectionName: 'components_block_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
  };
}

export interface BlockServices extends Struct.ComponentSchema {
  collectionName: 'components_block_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    item: Schema.Attribute.Component<'block.array-data', true>;
  };
}

export interface BlockSkill extends Struct.ComponentSchema {
  collectionName: 'components_block_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCollection extends Struct.ComponentSchema {
  collectionName: 'components_elements_collections';
  info: {
    description: '';
    displayName: 'categories';
  };
  attributes: {
    announcement_bar_links: Schema.Attribute.Component<'block.category', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 14;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface ElementsData extends Struct.ComponentSchema {
  collectionName: 'components_elements_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    additionalInfo: Schema.Attribute.String;
    duration: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
  };
}

export interface ElementsHeading extends Struct.ComponentSchema {
  collectionName: 'components_elements_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'ButtonWithLink';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsReview extends Struct.ComponentSchema {
  collectionName: 'components_elements_reviews';
  info: {
    description: '';
    displayName: 'Review';
  };
  attributes: {
    author: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsText extends Struct.ComponentSchema {
  collectionName: 'components_elements_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface ElementsUserData extends Struct.ComponentSchema {
  collectionName: 'components_elements_user_data';
  info: {
    description: '';
    displayName: 'userData';
  };
  attributes: {
    general: Schema.Attribute.Component<'block.array-data', true>;
    GFE: Schema.Attribute.Component<'block.array-data', true>;
    PSE: Schema.Attribute.Component<'block.array-data', true>;
  };
}

export interface ElementsWorkingTime extends Struct.ComponentSchema {
  collectionName: 'components_elements_working_times';
  info: {
    description: '';
    displayName: 'WorkingTime';
  };
  attributes: {
    end: Schema.Attribute.String;
    start: Schema.Attribute.String;
    workday: Schema.Attribute.String;
  };
}

export interface EntryDataWithBooleanValues extends Struct.ComponentSchema {
  collectionName: 'components_entry_data_with_boolean_values';
  info: {
    displayName: 'dataWithBooleanValues';
  };
  attributes: {
    hasBronzeBadge: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    hasGoldBadge: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasSilverBadge: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface EntryRates extends Struct.ComponentSchema {
  collectionName: 'components_entry_rates';
  info: {
    displayName: 'rates';
  };
  attributes: {
    general: Schema.Attribute.Component<'elements.data', true>;
    GFE: Schema.Attribute.Component<'elements.data', true>;
    PSE: Schema.Attribute.Component<'elements.data', true>;
  };
}

export interface EntrySuburb extends Struct.ComponentSchema {
  collectionName: 'components_entry_suburbs';
  info: {
    description: '';
    displayName: 'suburb';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SectionBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    Button: Schema.Attribute.Component<'elements.button-link', false>;
    heading: Schema.Attribute.Text;
    image_for_desktop: Schema.Attribute.Media<'images'>;
    image_for_mobile: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
  };
}

export interface SectionFindByLocation extends Struct.ComponentSchema {
  collectionName: 'components_section_find_by_locations';
  info: {
    description: '';
    displayName: 'FindByLocation';
  };
  attributes: {
    card: Schema.Attribute.Component<'block.location-card', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String;
  };
}

export interface SectionFindByType extends Struct.ComponentSchema {
  collectionName: 'components_section_find_by_types';
  info: {
    description: '';
    displayName: 'Find_By_Type';
  };
  attributes: {
    Button: Schema.Attribute.Component<'elements.link', false>;
    categories: Schema.Attribute.Component<'block.category', true>;
    heading: Schema.Attribute.String;
    providers: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    show_categories_in_the_center: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_elements_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    info: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', false>;
    text: Schema.Attribute.String;
  };
}

export interface SectionImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_image_banners';
  info: {
    description: '';
    displayName: 'imageBanner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionInfo extends Struct.ComponentSchema {
  collectionName: 'components_section_infos';
  info: {
    description: '';
    displayName: 'TextWithTitle';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionList extends Struct.ComponentSchema {
  collectionName: 'components_section_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    Heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionNavigation extends Struct.ComponentSchema {
  collectionName: 'components_section_navigations';
  info: {
    displayName: 'navigation';
  };
  attributes: {
    navigation_items: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation-item.navigation-item'
    >;
  };
}

export interface SectionTopProviders extends Struct.ComponentSchema {
  collectionName: 'components_section_top_providers';
  info: {
    description: '';
    displayName: 'Providers';
  };
  attributes: {
    heading: Schema.Attribute.String;
    providers: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.accordion': BlockAccordion;
      'block.array-data': BlockArrayData;
      'block.category': BlockCategory;
      'block.favorites-ids': BlockFavoritesIds;
      'block.incall': BlockIncall;
      'block.level-2': BlockLevel2;
      'block.level-3': BlockLevel3;
      'block.location-card': BlockLocationCard;
      'block.rich-text': BlockRichText;
      'block.services': BlockServices;
      'block.skill': BlockSkill;
      'elements.button-link': ElementsButtonLink;
      'elements.collection': ElementsCollection;
      'elements.data': ElementsData;
      'elements.heading': ElementsHeading;
      'elements.link': ElementsLink;
      'elements.review': ElementsReview;
      'elements.text': ElementsText;
      'elements.user-data': ElementsUserData;
      'elements.working-time': ElementsWorkingTime;
      'entry.data-with-boolean-values': EntryDataWithBooleanValues;
      'entry.rates': EntryRates;
      'entry.suburb': EntrySuburb;
      'section.banner': SectionBanner;
      'section.find-by-location': SectionFindByLocation;
      'section.find-by-type': SectionFindByType;
      'section.footer': SectionFooter;
      'section.image-banner': SectionImageBanner;
      'section.info': SectionInfo;
      'section.list': SectionList;
      'section.navigation': SectionNavigation;
      'section.top-providers': SectionTopProviders;
    }
  }
}
