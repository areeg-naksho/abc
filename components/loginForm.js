export default function LoginForm({
  onSubmitHandler,
  onChangeHandler,
  stateFormData,
  stateFormError,
  stateFormMessage,
}) {
  return (
    <form className="form-login card" method="POST" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <h2>Login</h2>
        <hr />
        {stateFormMessage.status === "error" && (
          <h4 className="warning text-center">{stateFormMessage.error}</h4>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
          value={stateFormData.email.value}
        />
        {stateFormError.email && (
          <span className="warning">{stateFormError.email.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          value={stateFormData.email.password}
        />
        {stateFormError.password && (
          <span className="warning">{stateFormError.password.hint}</span>
        )}
      </div>
      <div>
        <button type="submit" className="btn btn-block btn-warning">
          Login
        </button>
      </div>
      <style jsx>{`
        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-control {
          display: block;
          width: 100%;
          padding: 0.375rem 0.75rem;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 3px solid #ced4da;
          border-radius: 0;
          transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
        }
        .form-login,
        .form-register,
        .form-post {
          width: fit-content;
          padding-bottom: 2rem;
          margin: auto;
        }
        .page-error {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          height: 90vh;
          padding: 10rem 2rem;
        }
        .btn {
          padding: 0.375rem 0.75rem;
          margin-bottom: 0.75rem;
        }
        .btn-block {
          display: block;
          width: 100%;
        }
        .btn-lg {
          padding: 0.5rem 1rem;
          font-size: 1.125rem;
          line-height: 1.5;
          border-radius: 0;
        }
        .btn-warning {
          color: #2d2a26;
          background-color: #bedab9;
          border: solid 1px #2d2a26;
          border-radius: 20px;
        }
      `}</style>
    </form>
  );
}
