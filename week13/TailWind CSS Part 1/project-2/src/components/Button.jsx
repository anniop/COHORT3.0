export const Button = ({
  disabled,
  children,
  onClick
}) => {
  return <button onClick={onClick} className={`mt-6 rounded-2xl text-3xl px-36 py-1 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-blue-400"}`}>
    {children}
  </button>
}
