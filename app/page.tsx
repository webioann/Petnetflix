'use server'
import { redirect } from 'next/navigation'

async function HomePage() {
    redirect(`/browse`) // Navigate to the Browse page
}

export default HomePage;
