import { collection, doc, getDoc, getDocs, query, where, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "./config"

export const getProducts = async () => {
    const productsRef = collection(db, "productos")
    const snapshot = await getDocs(productsRef)

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const getCategories = async () => {
    const categoriesRef = collection(db, "categorias")
    const snapshot = await getDocs(categoriesRef)

    return snapshot.docs.map(doc => doc.data().name)
}

export const getProductsByCategory = async (category) => {
    const productsRef = collection(db, "productos")
    const q = query(productsRef, where("category", "==", category))

    const snapshot = await getDocs(q)

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const getDetail = async (id) => {
    const docRef = doc(db, "productos", id)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
        throw new Error("Producto no encontrado")
    }

    return {
        id: docSnap.id,
        ...docSnap.data()
    }
}

export const createOrder = async (order) => {
    const ordersRef = collection(db, "orders")

    const docRef = await addDoc(ordersRef, {
        ...order,
        date: serverTimestamp()
    })

    return docRef.id
}