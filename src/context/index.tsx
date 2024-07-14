import { createContext, ReactNode, useState } from 'react';


export const ChangePageContentContext = createContext({
  showContent: false,
  toggleContent: () => {},
  showInPersonMentoringContent: false,
  toggleInPersonContent: () => {},
});

type Props = {
    children: ReactNode
}

export const ChangePageContentProvider = ({ children }: Props) => {
  const [showContent, setshowContent] = useState(false);

  const [showInPersonMentoringContent, setShowInPersonMentoringContent] = useState(false)

  const toggleContent = () => {
    setshowContent(!showContent);
    setShowInPersonMentoringContent(false);
  };

  const toggleInPersonContent = () => {
    setShowInPersonMentoringContent(!showInPersonMentoringContent);
    setshowContent(false);
  }

  return (
    <ChangePageContentContext.Provider value={{ showContent, toggleContent, showInPersonMentoringContent, toggleInPersonContent }}>
      {children}
    </ChangePageContentContext.Provider>
  );
};