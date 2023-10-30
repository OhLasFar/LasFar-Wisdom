import { CONFIG } from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineReddit,
  AiOutlineYouTube,
  AiOutlineTwitch,
} from "react-icons/ai"
import styled from "@emotion/styled"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>💬 Contact</StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="icon" />
            <div className="name">Instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">email</div>
          </a>
        )}
{CONFIG.profile.twitter && (
  <a
    href={`https://twitter.com/${CONFIG.profile.twitter}`}
    rel="noreferrer"
    target="_blank"
    css={{ overflow: "hidden" }}
  >
    <AiOutlineTwitter className="icon" />
    <div className="name">Twitter</div>
  </a>
)}
{CONFIG.profile.reddit && (
  <a
    href={`https://reddit.com/u/${CONFIG.profile.reddit}`}
    rel="noreferrer"
    target="_blank"
    css={{ overflow: "hidden" }}
  >
    <AiOutlineReddit className="icon" />
    <div className="name">Reddit</div>
  </a>
)}
{CONFIG.profile.youtube && (
  <a
    href={`https://youtube.com/channel/${CONFIG.profile.youtube}`}
    rel="noreferrer"
    target="_blank"
    css={{ overflow: "hidden" }}
  >
    <AiOutlineYoutube className="icon" />
    <div className="name">YouTube</div>
  </a>
)}
{CONFIG.profile.twitch && (
  <a
    href={`https://twitch.tv/${CONFIG.profile.twitch}`}
    rel="noreferrer"
    target="_blank"
    css={{ overflow: "hidden" }}
  >
    <AiOutlineTwitch className="icon" />
    <div className="name">Twitch</div>
  </a>
)}
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
