export default function WhenCanWeMeetIcon({width, height, stroke, onClick}) {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={`${width ? width : 17}`} height={`${height ? height : 17}`} viewBox="0 0 17 16" fill="none">
      <path d="M5.25781 2V3.5M12.2578 2V3.5M2.75781 12.5V5C2.75781 4.60218 2.91585 4.22064 3.19715 3.93934C3.47846 3.65804 3.85999 3.5 4.25781 3.5H13.2578C13.6556 3.5 14.0372 3.65804 14.3185 3.93934C14.5998 4.22064 14.7578 4.60218 14.7578 5V12.5M2.75781 12.5C2.75781 12.8978 2.91585 13.2794 3.19715 13.5607C3.47846 13.842 3.85999 14 4.25781 14H13.2578C13.6556 14 14.0372 13.842 14.3185 13.5607C14.5998 13.2794 14.7578 12.8978 14.7578 12.5M2.75781 12.5V7.5C2.75781 7.10218 2.91585 6.72064 3.19715 6.43934C3.47846 6.15804 3.85999 6 4.25781 6H13.2578C13.6556 6 14.0372 6.15804 14.3185 6.43934C14.5998 6.72064 14.7578 7.10218 14.7578 7.5V12.5" stroke={stroke ? stroke : "#737373"} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
