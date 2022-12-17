import React from 'react'

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Ephrem Alemnew I am Undergraduate student 
         in University of Gondar that is located in Ethiopia. 
         i am interested more on Web and mobile applications development using react and react-native.
         i have some mini projects on my github account. 
         so you can see it by using the link that is placed on this portfolio.
        </p>

        <br />

        <p className="text-xl">
         
        </p>
      </div>
    </div>
  )
}

export default About
