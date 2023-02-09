import { CrashReportProps } from "./types"
import { ErrorBoundary } from "react-error-boundary"

export const CrashReport = ({ children }: CrashReportProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        //TODO report error to appdata
        console.log(error)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <h1>CrashReport</h1>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}
