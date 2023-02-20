export interface ToolbarViewProps {
  /** should we enable the alarm icon */
  enableAlarmIcon: boolean;

  /** color of the Alarmicon */
  alarmIconColor: string;

  /** show AccountBox */
  showAccountBox: boolean;

  /** show AlarmBox */
  showAlarmBox: boolean;

  /** onClickOnUserIcon */
  onClickOnUserIcon: () => void;

  /** onClickOnUserIcon */
  onClickOnAlarmIcon: () => void;

  /** onClickOnUserIcon */
  onClickOnBackground: () => void;
}
