import heroMob from './images/image-hero-mobile.png'
import herodesk from './images/image-hero-desktop.png'
import logo from './images/logo.svg'
import menu from './images/icon-menu.svg'
import './index.css'
import audio from './images/client-audiophile.svg'
import data from './images/client-databiz.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import close from './images/icon-close-menu.svg'
import arrowDown from './images/icon-arrow-down.svg'
import arrowUp from './images/icon-arrow-up.svg'
import calendar from './images/icon-calendar.svg'
import reminder from './images/icon-reminders.svg'
import todo from './images/icon-todo.svg'
import planning from './images/icon-planning.svg'

import {useState} from 'react'

function App() {
  
  const [active, setActive] = useState(false)
  const [features, setFeatures] = useState(false)
  const [company, setCompany] = useState(false)

  return (
    <div className='bg-[#FAFAFA]'>
      <div className='flex justify-between p-6'>
        <div className='min-h-full pl-2'>
          <img className='inline-block mr-6' src={logo} alt='logo' />
        <div className='hidden md:inline-flex ml-6 justify-between'>
          <ul className='text-[#696969] gap-7 flex
           leading-9'>
            <li onClick={() =>setFeatures(!features)}
            className='cursor-pointer'>Features
              <img 
              className='inline-block cursor-pointer ml-2' src={!features ? arrowDown : arrowUp} /></li>
              {features && 
              <div className='fixed top-[4.5em] w-[10.5em] h-[10.5em] text-center
               bg-white rounded-xl shadow-2xl left-[6em] flex flex-col pl-6 pt-2 mb-4'>
                <ul>
                  <li className='cursor-pointer max-w-[115px]'><img src={todo} alt='to do list' 
                  className='inline-block mr-3' />Todo List</li>
                  <li className='cursor-pointer max-w-[115px]'><img src={calendar} alt='to do list' 
                  className='inline-block mr-3' />Calendar</li>
                  <li className='cursor-pointer max-w-[133px]'><img src={reminder} alt='to do list' 
                  className='inline-block mr-3' />Reminders</li>
                  <li className='cursor-pointer max-w-[115px]'><img src={planning} alt='to do list' 
                  className='inline-block mr-3' />Planning</li>
                </ul>
              </div>             }
            <li className='cursor-pointer' onClick={() =>setCompany(!company)}>Company
              <img 
              
              className='inline-block cursor-pointer ml-2' src={!company ? arrowDown : arrowUp} />
            </li>
            {company && <div className='fixed top-[4.5em] w-[8.5em] h-[9em] justify-center items-center
               bg-white rounded-xl shadow-2xl left-[16em] flex flex-col pt-2 mb-4'>
                <ul>
                  <li className='cursor-pointer'>History</li>
                  <li className='cursor-pointer'>Our team</li>
                  <li className='cursor-pointer'>Blog</li>
                </ul>
              </div>        }
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>About</li>
          </ul>
        </div>
        
          
        
        </div>
          <div className='hidden md:flex gap-8'>
          <a className='text-[#696969] cursor-pointer inline-block mt-2'>Login</a>
          <button className='border-[2px] hover:border-black
           hover:text-black text-[#696969] border-[#707070] w-[7em] h-11 rounded-2xl'>Register</button>
          </div>
        <img onClick={() => setActive(!active)}
        className='w-11 md:hidden cursor-pointer h-6' src={menu} alt='menu icon' />
      </div>
     {active && 
     <div className='fixed md:hidden top-0 right-0 w-[65%] p-4 min-h-full max-h-full bg-[#FAFAFA]'>
       <img onClick={() => setActive(!active)}
        className='float-right w-8 h-8 cursor-pointer' alt='close menu' src={close} />
        <div className='relative flex flex-col'>
        <div className='mt-11 ml-6'>
          <ul className='text-[#696969] min-[520px]:text-[1.2rem] 
           leading-9'>
            <li onClick={() =>setFeatures(!features)}
            className='cursor-pointer'>Features
              <img 
              
              className='inline-block cursor-pointer ml-4' src={!features ? arrowDown : arrowUp} /></li>
              {features && 
              <div className='flex flex-col pl-6 pt-2 mb-4'>
                <ul>
                  <li className='cursor-pointer max-w-[115px]'><img src={todo} alt='to do list' 
                  className='inline-block mr-3' />Todo List</li>
                  <li className='cursor-pointer max-w-[115px]'><img src={calendar} alt='to do list' 
                  className='inline-block mr-3' />Calendar</li>
                  <li className='cursor-pointer max-w-[133px]'><img src={reminder} alt='to do list' 
                  className='inline-block mr-3' />Reminders</li>
                  <li className='cursor-pointer max-w-[115px]'><img src={planning} alt='to do list' 
                  className='inline-block mr-3' />Planning</li>
                </ul>
              </div>             }
            <li className='cursor-pointer' onClick={() =>setCompany(!company)}>Company
              <img 
              
              className='inline-block cursor-pointer ml-4' src={!company ? arrowDown : arrowUp} />
            </li>
            {company && <div className='flex flex-col pl-6 pt-2 mb-4'>
                <ul>
                  <li>History</li>
                  <li>Our team</li>
                  <li>Blog</li>
                </ul>
              </div>}
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>About</li>
          </ul>
        </div>
        <div className='flex flex-col relative text-center px-4 mb-[5em]
        min-[520px]:text-[1.2rem] text-[#696969] pt-8'>
          <a className='block cursor-pointer mb-4'>Login</a>
          <button className='border-[2px] cursor-pointer border-[#707070] hover:text-black h-11 rounded-2xl'>Register</button>
          
        </div>
        </div>
      </div>}
      <div className='md:flex flex-row-reverse gap-[5em] lg:gap-[10em] md:px-8 lg:px-11 md:justify-center md:items-center'>
      <img className='block w-full md:hidden' src={heroMob} alt='background mobile' />
      <img className='hidden md:flex  max-w-[50%] max-h-[550px]' src={herodesk} alt='background desktop' />
      <div>
      <div className='flex flex-col justify-center items-center text-center
      md:text-left md:items-start  mb-14'>
      <h1 className='text-[2.2rem] md:text-[3rem] min-[1152px]:text-[4rem] md:max-w-[20em]
       text-[#141414] font-bold mt-8 mb-4 md:mb-8  lg:leading-[1em]'>Make <span className='lg:block'>remote work</span></h1>
      <p className='text-[#696969] max-w-[21em] 
      md:max-w-[26em] mb-8 md:mb-12'>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
      <button className='bg-[#141414] font-semibold text-[1.3rem] hover:border-black hover:border-[2px] hover:bg-white hover:text-black
      md:text-[1rem] md:w-[150px] md:h-[48px] text-white w-[190px] h-[64px] rounded-2xl'>Learn more</button>
     </div>
     <div className='flex justify-around md:mb-2 mb-[8em]'>
      <img className='w-[6em]  h-[1.1em]' src={data} alt='data company logo'/>
      <img className='w-[3.8em]  h-[1.9em]' src={audio} alt='audio logo'/>
      <img className='w-[4em]  h-[1.1em]' src={meet} alt='company logo'/>
      <img className='w-[5em]  h-[1.4em]' src={maker} alt='company logo'/>
      </div>
      </div>
     </div>
     <div className='h-1'></div>
    </div>
  )
}

export default App
