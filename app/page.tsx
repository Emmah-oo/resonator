import Essential from '@/components/Essential'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Hosts from '@/components/Hosts'
import Podcasts from '@/components/Podcasts'
import Video from '@/components/Video'

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <Podcasts />
      <Essential />
      <Video />
      <Hosts />
    </>
  )
}
