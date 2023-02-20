export interface VerticalToggleViewProps {
  /** show Maintenance Mode Toggle butto */
  showMaintenanceButton: boolean;

  /** the hmi isLoading at the Momement */
  enableVerticalToggle: boolean;

  /** active Mode */
  activeMode: string;

  /** user click on Maintenance */
  onClickMaintenaceMode: () => void;

  /** user click on Proction Mode */
  onClickProductionMode: () => void;

  /** user click on  ManualMode */
  onClickManualMode: () => void;

  /** user click on alreay enabled Manual Mode*/
  onClickEnabledManualMode: () => void;

  /** user click on already enabled Maintenance mode */
  onClickEnabledMaintenanceMode: () => void;
}
