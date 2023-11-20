'use client';

import { 
  Flex, 
  Text, 
  Button, 
  Box,
  DropdownMenu,
  Switch,
  Avatar,
  IconButton

} from '@radix-ui/themes';

import { 

  GearIcon, 
  DotsHorizontalIcon,
  EyeOpenIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
  DesktopIcon,
  PlusIcon,
  Share2Icon,
 } from '@radix-ui/react-icons';

export default function Topbar() {
  return (
  <Flex grow="1">  
    <Box pt="2" style={{ 
      width: 1032,
      height: 40,
      background: 'var(--gray-a2)', 
      borderRadius: 'var(--radius-3)',
      boxShadow: 'var(--shadow-2)'
      }}>
     
      <Flex direction="row" gap="5" align="center" justify="between" pl="4" pr="4">
        <Box>
          <Text size="1" align="center">Documents / Doc-1</Text>
        </Box>
     
          <Flex align="center" gap="1">
            <Switch size="1" variant="soft" />
            <DesktopIcon />  
          </Flex>  

        <Flex gap="3">
          <Flex align="center" gap="1">
            <Switch size="1" variant="soft" />
            <Text as="label" size="1">Publish</Text>
          </Flex>
          <Flex align="center" gap="1">
          <Switch size="1" variant="soft" />
            <Text as="label" size="1">Edit</Text>
          </Flex>
          <Button variant="ghost" size="1">
            <Share2Icon />
            Share
          </Button>
         
        </Flex>

          <Flex align="center"gap="1">
            <Button variant="ghost" size="1"><EyeOpenIcon /></Button>
            <Button variant="soft" size="1"><TriangleLeftIcon /></Button>
            <Button variant="soft" size="1"><TriangleRightIcon /></Button>
          </Flex>
    
          <Flex align="center">
            <Avatar size="1" radius="full"
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
      />
            <Avatar size="1" radius="full"
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="B"
      />
          </Flex>

        <Flex align="center" gap="2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <Button highContrast size="1">
            <PlusIcon />Add
          </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Document</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ E">Template</DropdownMenu.Item>       
            </DropdownMenu.Content>
        </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost">
                <DotsHorizontalIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">New Nested Doc</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ E">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ E">Unpublish</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ E">Templatize</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ E">Preview</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ E">Run</DropdownMenu.Item>       
              <DropdownMenu.Separator />
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Import</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Docx</DropdownMenu.Item>
                  <DropdownMenu.Item>Markdown</DropdownMenu.Item>
                  <DropdownMenu.Item>PDF</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Export</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Docx</DropdownMenu.Item>
                  <DropdownMenu.Item>Markdown</DropdownMenu.Item>
                  <DropdownMenu.Item>PDF</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ E">Integration</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ E">Email</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ E">Automation</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ E">Invite Users</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D"><GearIcon />Settings</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
        </Flex>
      </Flex>
    
    </Box> 
  </Flex>  
  )
}



