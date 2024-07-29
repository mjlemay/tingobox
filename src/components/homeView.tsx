import React, { useState, useEffect } from 'react';
import { basicProjectType } from '../constants/defaults';
import Block from '../components/block.tsx';
import MenuItem from '../components/menuItem.tsx';
import { BackpackIcon, DotsVerticalIcon } from '@radix-ui/react-icons'

interface HomeViewProps {
    actionHandler: Function;
}

const LIMIT = 5;
  
export default function HomeView(props:HomeViewProps):JSX.Element {
  const { actionHandler } = props;
  const defaultProjects:basicProjectType[] = [];
  const [ projects, setProjects ] = useState(defaultProjects);
  const [ hasFetched, setFetched ] = useState(false);

  const fetchData = async () => {
    await projectData.getProjects(LIMIT).then((data:basicProjectType[]) => {
      setProjects(data);
      setFetched(true);
    });
  };

  useEffect(()=> {
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched]);

  return (
    <>
        <Block title="Recent Projects" icon={<BackpackIcon width={20} height={20} />} menu={<DotsVerticalIcon width={20} height={20} />}>
              <div className="flex flex-col gap-2">
                {projects && projects.map(project => {
                  return (
                    <MenuItem 
                      key={`$_item_${project.name}`}
                      label={project.name} 
                      handleAction={() => actionHandler('screen', 'workspace', project)}
                    />
                  )
                })}
              </div>
            </Block>
    </>
  )
}