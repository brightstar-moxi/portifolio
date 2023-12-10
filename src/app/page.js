import ClientAboutView from '@/components/client-view/about'
import ClientContactView from '@/components/client-view/contact'
import ClientEducationView from '@/components/client-view/education'
import ClientexprienceView from '@/components/client-view/experience'
import ClientHomeView from '@/components/client-view/home'
import ClientProjectView from '@/components/client-view/project'


export default function Home() {
  return (
    <div>
      <ClientHomeView />
      <ClientAboutView />
      <ClientexprienceView />
      <ClientEducationView />
      <ClientProjectView />
      <ClientContactView />
    </div>
  )
}
