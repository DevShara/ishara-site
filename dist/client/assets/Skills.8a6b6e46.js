import{r as t,T as c,j as e,a as i}from"./index.01d1e016.js";import{m as l}from"./motion.ada0136c.js";const p=()=>{const r=t.exports.useContext(c),[s,n]=t.exports.useState({});t.exports.useEffect(()=>{r=="light"?n({textColour:"text-gray-700",bgColour:"bg-gray-100",borderColour:" border-gray-200"}):n({textColour:"text-gray-300",bgColour:"bg-gray-800",borderColour:" border-gray-600"})},[r]);const a={visible:o=>({opacity:1,transition:{delay:o*.3}}),hidden:{opacity:0}};return e("div",{className:"container mx-auto md:px-12 my-6 p-6  ",children:i("div",{className:` p-12 rounded-2xl ${s.textColour} ${s.bgColour} `,children:[e("h2",{className:"text-2xl font-semibold  ",children:"Skills, Familiar Tools & Technologies"}),i("ul",{className:"  mt-3 ",children:[e(l.li,{className:`border-b-2 py-4 ${s.borderColour}`,whileHover:{translateX:12,opacity:.9},transition:{type:"spring",stiffness:100,damping:25},whileTap:{translateX:48},initial:"hidden",whileInView:"visible",variants:a,custom:.25,children:i("p",{className:"text-lg",children:[e("span",{className:" font-semibold",children:"Programming Languages"}),e("span",{className:"block",children:"JavaScript, Typescript"})]})}),e(l.li,{className:`border-b-2 py-4 ${s.borderColour}`,whileHover:{translateX:12,opacity:.9},transition:{type:"spring",stiffness:100,damping:25},whileTap:{translateX:48},initial:"hidden",whileInView:"visible",variants:a,custom:.5,children:i("p",{className:"text-lg",children:[e("span",{className:" font-semibold",children:"Libraries and Frameworks"}),e("span",{className:"block",children:"React, Next.js, Gatsby."})]})}),e(l.li,{className:`border-b-2 py-4 ${s.borderColour}`,whileHover:{translateX:12,opacity:.9},transition:{type:"spring",stiffness:100,damping:25},whileTap:{translateX:48},initial:"hidden",whileInView:"visible",variants:a,custom:.75,children:i("p",{className:"text-lg",children:[e("span",{className:" font-semibold",children:"CSS frameworks"}),e("span",{className:"block",children:"Tailwindcss, Bootstrap, and Styled Components."})]})}),e(l.li,{className:`border-b-2 py-4 ${s.borderColour}`,whileHover:{translateX:12,opacity:.9},transition:{type:"spring",stiffness:100,damping:25},whileTap:{translateX:48},initial:"hidden",whileInView:"visible",variants:a,custom:1,children:i("p",{className:"text-lg",children:[e("span",{className:" font-semibold",children:"Infrastructure Tools & Technologies"}),e("span",{className:"block",children:"Sanity Headless CMS, Netlify, Vercel, Linux terminal, Git"})]})}),e(l.li,{className:`border-b-2 py-4 ${s.borderColour}`,whileHover:{translateX:12,opacity:.9},transition:{type:"spring",stiffness:100,damping:25},whileTap:{translateX:48},initial:"hidden",whileInView:"visible",variants:a,custom:1.25,children:i("p",{className:"  text-lg",children:[e("span",{className:" font-semibold",children:"Designing & Prototyping Tools"}),e("span",{className:"block",children:"Adobe XD, Figma"})]})})]})]})})};export{p as default};