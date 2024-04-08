import { ReactNode } from 'react'
import NavigationHeader from '@/components/NavigatioHeader/NavigationHeader'
import NetflixLogo from '@/components/NetflixLogo/NetflixLogo'
import Navigation from '@/components/Navigation/Navigation'
import SearchBar from '@/components/SearchBar/SearchBar'
import KidsLink from '@/components/EmptyLinksComponents/KidsLink'
import GiftLink from '@/components/EmptyLinksComponents/GiftLink'
import MessageBell from '@/components/EmptyLinksComponents/MessageBell'
import UserProfiles from '@/components/UserProfile/UserProfiles'
import Container from "../../components/Container/Container";
import  './browse.scss'

async function BrowseLayout ({ children }: { children: ReactNode }) {
    
    return (
        <main className='browse-layout'>
            <Container width={1400}>
                <NavigationHeader>
                    <NetflixLogo/>
                    <Navigation/>
                    <SearchBar/>
                    <KidsLink/>
                    <GiftLink/>
                    <MessageBell/>
                    <UserProfiles/>
                </NavigationHeader>
            </Container>
            {children}
        </main>
    )
}

export default BrowseLayout;

