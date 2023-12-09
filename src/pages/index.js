import * as React from "react"
import { Switch } from "@headlessui/react"

const SeasonSwitch = () => {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`
        bg-neutral-700
        ${enabled ? 'bg-gradient-to-l from-sky-200 to-sky-400' : 'bg-gradient-to-l from-sky-100 to-sky-200'} 
        ${enabled ? "shadow-[-2px_1px_5px_#666,2px_-1px_5px_#fff,inset_0_0_0px_#fff]" : "shadow-[1px_-1px_5px_#666,-1px_1px_5px_#fff,inset_0_0px_20px_#444]"} 
        inline-flex h-[50px] w-[100px] items-center m-2 rounded-full focus:outline-none transition duration-[400ms] ease=out`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-snow" viewBox="0 0 16 16"
        className={`${enabled ? 'translate-x-[100%]' : 'translate-x-[0%]'
          } h-1/2 w-1/2 transform transition duration-[400ms] ease=out`}>
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" className={`${enabled ? 'opacity-1' : 'opacity-0'} fill-yellow-300 transition duration-400`} />
        <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" className={`${enabled ? 'opacity-0' : 'opacity-1'} fill-sky-50 transition duration-400`} />
      </svg>
    </Switch>
  )
}

const IndexPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen py-2 bg-neutral-400">
      <h1 className="font-sans text-4xl text-neutral-700 py-4 font-semibold">Aerocalc</h1>
      <SeasonSwitch />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Aerocalc</title>
