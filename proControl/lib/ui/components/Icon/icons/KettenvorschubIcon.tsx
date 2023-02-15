import { Svg, Path, Circle } from "@proControl/lib/ui/svg"

export const KettenvorschubIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="77.5" cy="65.5" r="5.5" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 41.8387C7 40.2887 8.25649 39.0322 9.80645 39.0322C11.3564 39.0322 12.6129 40.2887 12.6129 41.8387V48.387H21.9677V41.8387C21.9677 40.2887 23.2242 39.0322 24.7742 39.0322C26.3242 39.0322 27.5806 40.2887 27.5806 41.8387V48.387H36V41.8387C36 40.2887 37.2565 39.0322 38.8065 39.0322C40.3564 39.0322 41.6129 40.2887 41.6129 41.8387V48.387H50.9677V41.8387C50.9677 40.2887 52.2242 39.0322 53.7742 39.0322C55.3242 39.0322 56.5806 40.2887 56.5806 41.8387V48.387H65.9355V41.8387C65.9355 40.2887 67.192 39.0322 68.7419 39.0322C70.2919 39.0322 71.5484 40.2887 71.5484 41.8387V48.387H78.0968H79.0323V41.8387C79.0323 40.2887 80.2887 39.0322 81.8387 39.0322C83.3887 39.0322 84.6452 40.2887 84.6452 41.8387V49.6318C86.3926 50.3284 87.9842 51.2988 89.3421 52.4969C90.8188 53.7999 91.9902 55.3468 92.7894 57.0493C93.5887 58.7518 94 60.5765 94 62.4192V82.9999H88.3871V62.4192H88.2796C88.2796 61.2393 88.0162 60.0709 87.5045 58.9809C86.9928 57.8908 86.2427 56.9003 85.2971 56.066C84.3516 55.2316 83.229 54.5698 81.9936 54.1183C81.8806 54.077 81.7668 54.0375 81.6523 53.9999H68.7672C68.7588 53.9999 68.7504 54 68.7419 54C68.7335 54 68.7251 53.9999 68.7166 53.9999H53.7995C53.7911 53.9999 53.7826 54 53.7742 54C53.7658 54 53.7573 53.9999 53.7489 53.9999H38.8317C38.8233 53.9999 38.8149 54 38.8065 54C38.798 54 38.7896 53.9999 38.7812 53.9999H24.7995C24.7911 53.9999 24.7826 54 24.7742 54C24.7658 54 24.7573 53.9999 24.7489 53.9999H9.83174C9.82332 53.9999 9.81489 54 9.80645 54C9.79801 54 9.78958 53.9999 9.78116 53.9999H7V51.1935V48.387V41.8387Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.5805 37.1614L68.7417 28.742L56.5805 19.3872V25.0001H33.1934V31.5485H56.5805V37.1614Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}