import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, where, orderBy, serverTimestamp, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeqs9yDgBO7NiZeIdLr00TOsoMYiPx808",
  authDomain: "notnotion-6584e.firebaseapp.com",
  projectId: "notnotion-6584e",
  storageBucket: "notnotion-6584e.appspot.com",
  messagingSenderId: "1048593719420",
  appId: "1:1048593719420:web:876529216e4ae563a869f9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const colRef = collection(db, "movies");
const qRef = query(colRef, where("category", "==", "drama"), orderBy("createdAt"));
// const qRef = query(colRef, orderBy("createdAt"));



//Accessing individual Array Object. 
// const documentReference = doc(db, "movies", "gb1GK3oRo6WSNYvoY8Ak");
// onSnapshot(documentReference, (document) => {
//   console.log(document.data(), document.id);
// });

// getDocs(qRef)
//     .then(data => {
//       let movies = [];
//       data.docs.forEach(document => {
//         movies.push({...document.data(), id: document.id});
//       });
//       console.log(movies);
//     })
//     .catch(error => {
//       console.log(error);
//     }); 

getDocs(colRef)
    .then(data => {
      // console.log(data);
      let movies = [];
      data.docs.forEach(document => {
        // console.log(document.data(), document.id);
        movies.push({...document.data(), id: document.id});
      });
      console.log(movies);
    })
    .catch(error => {
      console.log(error);
    });  

// onSnapshot(colRef, (data) => {
//   let movies = [];
//   data.docs.forEach(document => {
//     movies.push({...document.data(), id: document.id});
//   });
//   console.log(movies);
// });

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", event => {
  event.preventDefault();
  addDoc(colRef, {
      name: addForm.name.value,
      // description: addForm.description.value,
      category: addForm.category.value,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp() 
  })
  .then(() => {
      addForm.reset();
  });
});  

const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener("submit", event => {
  event.preventDefault();
  const documentReference = doc(db, "movies", deleteForm.id.value);
  deleteDoc(documentReference)
  .then(() => {
    deleteForm.reset();
  });
});

const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", event => {
  event.preventDefault();
  const documentReference = doc(db, "movies", updateForm.id.value);
  updateDoc(documentReference, {
    name: updateForm.name.value,
    updatedAt: serverTimestamp()
  }).then(() => {
    updateForm.reset();
  });
});


const registerForm = document.querySelector(".register");
registerForm.addEventListener("submit", event => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, registerForm.email.value, registerForm.password.value)
      .then(credentials => {
        // console.log(credentials);
        registerForm.reset();
      })
      .catch(error => {
        console.log(error);
      });
});

const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", event => {
  signOut(auth)
      .then(() => {
        console.log("User Logged Out!");
      })
      .catch(error => {
        console.log(error);
      });
});


const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value)
      .then(credentials => {
        console.log(credentials);
        loginForm.reset();
      })
      .catch(error => {
        console.log(error);
      })
})