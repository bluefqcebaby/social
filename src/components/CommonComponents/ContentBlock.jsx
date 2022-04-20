

export default function ContentBlock({children, className}) {
  return (
    <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  )
}
