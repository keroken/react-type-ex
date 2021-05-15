import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color="#666aaa" onClick={() => alert('Clicked!')} />
      <ChildAsFC color="#FF33DD" onClick={() => alert('Clicked!')}>
        I'm a child.
      </ChildAsFC>
    </>
  );
};

export default Parent;