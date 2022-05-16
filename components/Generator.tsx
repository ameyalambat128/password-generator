import { NextPage } from 'next'
import React, { useState } from 'react'
import FormInput from './FormInput'
import { FcCheckmark } from 'react-icons/fc'
import { BiPlus } from 'react-icons/bi'

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+='
const getLowercase = () => {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
const getUppercase = () => {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
const getNumber = () => {
  return numbers[Math.floor(Math.random() * numbers.length)]
}
const getSymbol = () => {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const Generator: NextPage = () => {
  const [toggleIcon1, setToggleIcon1] = useState(true)
  const [toggleIcon2, setToggleIcon2] = useState(true)
  const [toggleIcon3, setToggleIcon3] = useState(true)
  const [toggleIcon4, setToggleIcon4] = useState(true)
  const [passwordResult, setPasswordResult] = useState('')
  const generatePassword = () => {
    const len = 10
    let password = passwordResult
    if (toggleIcon1) {
      password += getUppercase()
    }

    if (toggleIcon2) {
      password += getLowercase()
    }

    if (toggleIcon3) {
      password += getNumber()
    }

    if (toggleIcon4) {
      password += getSymbol()
    }

    for (let i = password.length; i < len; i++) {
      const x = generateX()
      password += x
      setPasswordResult(password)
    }
  }
  const generateX = () => {
    const xs = []
    if (toggleIcon1) {
      xs.push(getUppercase())
    }

    if (toggleIcon2) {
      xs.push(getLowercase())
    }

    if (toggleIcon3) {
      xs.push(getNumber())
    }

    if (toggleIcon4) {
      xs.push(getSymbol())
    }

    if (xs.length === 0) return ''

    return xs[Math.floor(Math.random() * xs.length)]
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-md bg-white p-5 shadow-md">
        <div className="flex items-center justify-center text-3xl font-semibold tracking-tighter">
          Password Generator
        </div>
        <div className="my-4 h-0.5 w-full bg-gray-300" />
        <div className="mb-4 shadow-sm">
          <FormInput result={passwordResult} />
        </div>
        <div className="flex items-center justify-around">
          <div className="w-full pr-2">Contain Uppercase Characters </div>
          <button
            className="rounded-full p-1"
            onClick={() => {
              setToggleIcon1(!toggleIcon1)
            }}
          >
            {toggleIcon1 ? <FcCheckmark /> : <BiPlus />}
          </button>
        </div>
        <div className="flex items-center justify-around">
          <div className="w-full pr-2">Contain Lowercase Characters </div>
          <button
            className="rounded-full p-1"
            onClick={() => {
              setToggleIcon2(!toggleIcon2)
            }}
          >
            {toggleIcon2 ? <BiPlus /> : <FcCheckmark />}
          </button>
        </div>
        <div className="flex items-center justify-around">
          <div className="w-full pr-2">Contain Numbers </div>
          <button
            className="rounded-full p-1"
            onClick={() => {
              setToggleIcon3(!toggleIcon3)
            }}
          >
            {toggleIcon3 ? <BiPlus /> : <FcCheckmark />}
          </button>
        </div>
        <div className="flex items-center justify-around">
          <div className="w-full pr-2">Contain Symbols </div>
          <button
            className="rounded-full p-1"
            onClick={() => {
              setToggleIcon4(!toggleIcon4)
            }}
          >
            {toggleIcon4 ? <BiPlus /> : <FcCheckmark />}
          </button>
        </div>
        <button
          className="mt-4 flex w-full justify-center rounded-md bg-blue-500 p-2 font-semibold text-white shadow-sm"
          onClick={() => generatePassword()}
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default Generator
