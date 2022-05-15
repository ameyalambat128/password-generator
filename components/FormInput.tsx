import { NextPage } from 'next'
import React, { useState } from 'react'
import { IoIosCopy, IoMdCopy } from 'react-icons/io'

interface Props {
  result: string
}

const FormInput: NextPage<Props> = ({ result }) => {
  const [toggleIcon, setToggleIcon] = useState(true)
  return (
    <div className="">
      <div className="flex h-10 w-full items-center justify-around rounded-md border-2 border-blue-500">
        <div className="w-3/4 text-black">{result}</div>
        <button className={`rounded-full p-0.5`} onClick={() => {}}>
          <IoMdCopy size={22} />
        </button>
      </div>
    </div>
  )
}

export default FormInput
