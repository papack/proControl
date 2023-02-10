import { CrashReportProps } from "./types"
import { ErrorBoundary } from "react-error-boundary"

export const CrashReport = ({ children }: CrashReportProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={({ message, name }) => {
        //TODO report error to appdata
        console.log(message, name)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

function ErrorFallback() {
  return (
    <div role="alert">
      <h1>CrashReport</h1>
      <p>Something went wrong</p>
      <p>err msg niy</p>
    </div>
  )
}
