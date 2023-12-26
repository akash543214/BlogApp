import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <>
            {label &&  <label htmlFor={id} className="text-base font-medium text-gray-900">
                  {' '}
                 {label}{' '}
                </label>
            }
            <div className="mt-2">
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props} 
            id={id}
            />
            </div>
        </>
    )
})
export default Input