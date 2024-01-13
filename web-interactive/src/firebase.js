import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
        apiKey: "AIzaSyBq6kkmcf7q4x4BbQ_wSrvkOGJdZjZhoDA",
        authDomain: "project-lamaran.firebaseapp.com",
        projectId: "project-lamaran",
        storageBucket: "project-lamaran.appspot.com",
        messagingSenderId: "5870136692",
        appId: "1:5870136692:web:27f402a8fe9157b26fd021"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}