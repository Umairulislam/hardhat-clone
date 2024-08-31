import React from "react"

const FeatureSection = ({
  title1,
  title2,
  content1,
  content2,
  btnText,
  image,
  reverse,
}) => {
  return (
    <section
      className={`flex justify-center flex-col md:flex-row items-center gap-10 flex-wrap pb-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="max-w-md w-full">
        <img src={image} alt={title1} />
      </div>
      <div className="max-w-md w-full flex flex-col items-start gap-10">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold">{title1}</h1>
          <p className="mt-5 text-gray-500">{content1}</p>
        </div>
        <div>
          <h1 className="md:text-4xl text-2xl font-bold">{title2}</h1>
          <p className="mt-5 text-gray-500">{content2}</p>
        </div>
        <div>
          <button className="btn-primary btn">{btnText}</button>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

// const FeatureSection = ({ title, content, image, buttonText, reverse }) => {
//   return (
//     <section
//       className={`flex flex-col ${
//         reverse ? "md:flex-row-reverse" : "md:flex-row"
//       } items-center py-12`}
//     >
//       <div className="md:w-1/2 px-6">
//         <h2 className="text-3xl font-bold mb-4">{title}</h2>
//         <p className="mb-6">{content}</p>
//         {buttonText && (
//           <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded">
//             {buttonText}
//           </button>
//         )}
//       </div>
//       <div className="md:w-1/2 px-6">
//         <img src={image} alt={title} />
//       </div>
//     </section>
//   )
// }

// export default FeatureSection
