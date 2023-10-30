import { CONFIG } from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai"  // Importing the necessary icons for Twitter and YouTube
import styled from "@emotion/styled"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.email && (
          <a
            href={`mailto:lasfarprofessional@gmail.com`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">Email</div>
          </a>
        )}
        <a
          href="https://twitter.com/OhLasFar"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter className="icon" />
          <div className="name">Twitter</div>
        </a>
        <a
          href="https://www.youtube.com/c/LasFar"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineYoutube className="icon" />
          <div className="name">Youtube</div>
        </a>
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
