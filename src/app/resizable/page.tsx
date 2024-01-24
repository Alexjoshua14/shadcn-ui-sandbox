import ServerComponent from '@/components/ServerComponent'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-2 border-pink-500">
        <ResizablePanelGroup direction="vertical" className="min-w-80 min-h-80">
          <ResizablePanel>
            <ServerComponent />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <ServerComponent />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  )
}

export default page