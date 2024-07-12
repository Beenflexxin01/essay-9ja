function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <div className="containr">
        <h1 className="primary-header">Something went wrong 😓😖 </h1>

        <p className="error-desc">{error.message}</p>

        <button className="reset" onClick={resetErrorBoundary}>
          Try Again!
        </button>
      </div>
    </>
  );
}

export default ErrorFallback;
