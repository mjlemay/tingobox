import React, { useCallback, useState, useEffect } from 'react';

import Block from '../components/block.tsx';
import Button from '../components/button.tsx';
import MenuItem from '../components/menuItem.tsx';
import ProjectIcon from '../svg/projectIcon';

interface HomeViewProps {
    actionHandler: Function;
}

type project = {
  name: string;
}
  
export default function HomeView(props:HomeViewProps):JSX.Element {
  const { actionHandler } = props;
  const defaultProjects:project[] = [];
  const [ projects, setProjects ] = useState(defaultProjects);
  const [ hasFetched, setFetched ] = useState(false);

  const fetchData = useCallback(() => {
    // const data = sqlite.projectDB?.getProjects()
    const data = [{ name: 'banana'}];
    setProjects(data)
    setFetched(true);
  }, []);

  useEffect(()=> {
    if (!hasFetched) {
      fetchData();
    }
  }, [hasFetched]);

  return (
    <>
        <Block title="Recent Projects">
              <div className="flex flex-col gap-2">
                {projects && projects.map(project => {
                  return <MenuItem key={`$_item_${project.name}`} label={project.name} />
                })}
              </div>
            </Block>
            <Block title="Quick Actions">
              <Button suffix={<ProjectIcon />} handleAction={() => actionHandler('newProject')}>New Project</Button>
            </Block>
    </>
  )
}