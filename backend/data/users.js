import bcrypt from "bcryptjs"
const users =[


    {
        ime:'Adnan Čuljević',
         email:'adnan@example.com',
         password:bcrypt.hashSync('123456'),
         slika:'/images/car.jpg',
         licenca:'UEFA B',
         brgod:'36',
         isKordinator:true,
         isAdmin:false,

    },
    {
        ime:'Fadil Goruždic',
         email:'rus@example.com',
         password:bcrypt.hashSync('123456'),
         slika:'/images/matura.png',
         licenca:'UEFA B',
         brgod:'56',
         isKordinator:true,
         isAdmin:false,

    },
    {
        ime:'Din Kurtanovic',
         email:'din@exapmle.com',
         password:bcrypt.hashSync('123456'),
         slika:'/images/matura.png',
         pozicija:'Krilni napadač',
         brgod:'21',
         isKordinator:false,
         isAdmin:false,

    },
    {
        ime:'Nedžad Nezirović',
         email:'nedzad@example.com',
         password:bcrypt.hashSync('123456'),
         slika:'/images/matura.png',
         pozicija:'vezni',
         brgod:'21',
         isKordinator:false,
         isAdmin:false,

    },
    {
        ime:'Meris Ahmatović',
         email:'meris@example.com',
         password:bcrypt.hashSync('123456'),
         slika:'/images/matura.png',
    
         brgod:'22',
         isKordinator:false,
         isAdmin:true,

    },
  
]


export default users