import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/studentDashBoard')
    }
    function navigateToLogin() {
        navigate('/')
    }

    const [formData, setFormData] = useState({
        fulname: "",
        email: "",
        password: "",
        role: "student"
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    console.log(formData)
    function handleChange(event) {
        console.log(event)
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        validation(name, value)
    }

    function validation(name, value) {
        if (name === 'fulname') {
            if (!value) {
                setErrors(prev => ({
                    ...prev,
                    [name]: "fulname is required"
                }))
            }
            else if (value.length < 3) {
                setErrors(prev => ({
                    ...prev,
                    [name]: "fulname must be atleast 3 character long"
                }))
            }
            else {
                setErrors(prev => ({
                    ...prev,
                    [name]: ""
                }))
            }
        }
        else if (name === 'email') {
            const re =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!value) {
                setErrors(prev => ({
                    ...prev,
                    [name]: "email is required"
                }))
            }

            else if (!re.test(value)) {
                setErrors(prev => ({
                    ...prev,
                    [name]: "Invalid Email"
                }))
            }
            else {
                setErrors(prev => ({
                    ...prev,
                    [name]: ""
                }))
            }
        }
        else if (name === 'password') {
            if (value.length < 8) {
                setErrors(prev => ({
                    ...prev,
                    [name]: "password must be atleast 8 character long"
                }))
            }
            else {
                setErrors(prev => ({
                    ...prev,
                    [name]: ""
                }))
            }
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-sky-700">
                <div className="bg-white rounded-2xl shadow-2xl  flex-col w-full md:w-1/3 max-w-4xl transition duration-1000 ease-out flex justify-between items-center">
                    <h2 className='p-3 text-3xl font-bold text-sky-700'>Virtual Room</h2>
                    <div className="inline-block border-[1px] justify-center w-60 border-sky-700 border-solid"></div>
                    <h3 className='text-xl font-semibold text-sky-700 pt-2'>Create Account!</h3>
                    {/* Inputs */}
                    <div className='flex flex-col items-center justify-center mt-2'>
                        <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-700 m-1 focus:shadow-md focus:border-sky-600 focus:outline-none focus:ring-0' placeholder='Name' value={formData.fulname} name='fulname' onChange={handleChange}></input>
                        {errors.fulname && <p style={{ color: 'red' }}>{errors.fulname}</p>}
                        <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-700 m-1 focus:shadow-md focus:border-sky-600 focus:outline-none focus:ring-0' placeholder='Email' value={formData.email} name='email' onChange={handleChange}></input>
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-sky-700 m-1 focus:shadow-md focus:border-sky-600 focus:outline-none focus:ring-0' placeholder='Password' value={formData.password} name='password' onChange={handleChange}></input>
                        {errors.password && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <div className='text-sky-700 m-2 text-lg'>
                            <label className='mr-5'>Role</label>
                            Student<input className='mr-5' type="radio" value={'student'} name="role" checked={formData.role === 'student'}></input>
                            Teacher<input type="radio" value={'teacher'} name="role" checked={formData.role === 'teacher'}></input>
                        </div>
                        <button className='rounded-3xl m-1 text-white bg-sky-700 px-4 py-2 shadow-md hover:bg-sky-600 transition duration-200 ease-in w-65 text-lg' onClick={handleClick}>
                            Sign Up
                        </button>
                    </div>
                    <p className='text-sky-700 mt-4 text-sm'>Already have an account?</p>
                    <p className='text-sky-700 mb-4 text-sm font-medium cursor-pointer' onClick={navigateToLogin}>Sign In to your Account?</p>
                </div>
            </div>
        </>
    )
}
export default SignUp