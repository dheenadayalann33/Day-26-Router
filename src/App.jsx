import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Compontes/NavBar'
import All from './Pages/All'
import FullStack from './Pages/FullStack'
import DataScience from './Pages/DataScience'
import Cyber from './Pages/Cyber'
import Career from './Pages/Career'

function App() {
  let data = [
    {
      type: 'Full Stack Development',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg',
      title: 'Best Full-Stack Development Project Ideas in 2024',
      date: '25 Mar, 2024'
    },
    {
      type: 'Full Stack Development',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp',
      title: 'How Long Would It Take to Be a Full Stack Developer?',
      date: '26 Mar, 2024'
    },
    {
      type: 'Full Stack Development',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png',
      title: 'Hot Topics That You Need To Know In Full Stack',
      date: '27 Mar, 2024'
    },
    {
      type: 'Full Stack Development',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png',
      title: '10 Best Database Management Systems For Software Developers',
      date: '01 Mar, 2024'
    },
    {
      type: 'Career',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-1536x804.webp',
      title: '10 Best DevOps Project Ideas for 2024',
      date: '22 Mar, 2024'
    },
    {
      type: 'Career',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Feature-image-Effective-Cloud-Computing-Career-Roadmap.webp',
      title: 'Effective Cloud Computing Career Roadmap 2024',
      date: '30 Mar, 2024'
    },
    {
      type: 'Career',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/1_YAiLTPaFg5IlvPrmpt6HAg.jpeg',
      title: 'What is PDD & SDD in RPA? THE TWO MOST CRUCIAL BLUEPRINTS in Robotics',
      date: '19 Mar, 2024'
    },
    {
      type: 'Career',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2020/11/word-image-1-1-1536x922.jpeg',
      title: 'A Guide To Learning Blockchain Technology From Scratch',
      date: '11 Mar, 2024'
    },
    {
      type: 'Data Science',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
      title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
      date: '11 Mar, 2024'
    },
    {
      type: 'Data Science',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
      title: '12 Real-World Data Science Examples: Power Of Data Science',
      date: '06 Mar, 2024'
    },
    {
      type: 'Data Science',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png',
      title: 'Can A Commerce Student Do Data Science?',
      date: '17 Mar, 2024'
    },
    {
      type: 'Data Science',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png',
      title: 'Roles and Responsibilities of a Data Scientist',
      date: '26 Mar, 2024'
    },
    {
      type: 'Cyber Security',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png',
      title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
      date: '21 Mar, 2024'
    },
    {
      type: 'Cyber Security',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
      title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      date: '01 Mar, 2024'
    },
    {
      type: 'Cyber Security',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif',
      title: 'What is Cybersecurity? Importance and its uses',
      date: '01 Mar, 2024'
    },
    {
      type: 'Cyber Security',
      img: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png',
      title: '8 Different Types of Cybersecurity and Threats Involved',
      date: '01 Mar, 2024'
    },

  ]

  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<All data = {data}/>}></Route>
          <Route path='/fullstack' element={<FullStack data = {data}/>}></Route>
          <Route path='/datascience' element = {<DataScience data = {data}/>}></Route>
          <Route path='/cyber' element={<Cyber data = {data}/>} ></Route>
          <Route path='/career' element={<Career data = {data}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
