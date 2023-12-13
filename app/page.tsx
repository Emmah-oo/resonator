import Essential from '@/components/Essential'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
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
    </>
  )
}
