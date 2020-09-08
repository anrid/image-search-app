import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useMst } from '../../store'
import { Link } from '../Link'

const Wrapper = styled.div`
  width: 15rem;
  height: 15rem;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.url});
  border-radius: 1rem;
  margin: 0.5rem;
  position: relative;

  & > .info-overlay {
    visibility: hidden;
  }

  &:hover > .info-overlay {
    visibility: visible;
  }
`

const NotFound = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  background-image: none;
  background-color: #eeeeee;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.25);
  border-radius: 1rem;
  cursor: pointer;
`

const Links = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
`

const UserProfile = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.5);
  cursor: pointer;
  padding: 0 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
`

const UserProfilePhoto = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 4rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: url(${({ url }) => url});
  margin-right: 1rem;
  flex: none;
`

const UserProfileName = styled.div`
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Image = ({ id }) => {
  const { search } = useMst()

  const image = search.getImage(id)
  if (!image) {
    return <NotFound>Not Found: Image {id}</NotFound>
  }

  return (
    <Wrapper url={image.urls.thumb}>
      <Overlay className="info-overlay">
        <Links>
          <Link download target="_blank" href={image.links.download}>
            download
          </Link>
          <Link>favorite</Link>
        </Links>
        <UserProfile href={image.user.links.html} target="_blank">
          <UserProfilePhoto url={image.user.profile_image.small} />
          <UserProfileName>{image.user.username}</UserProfileName>
        </UserProfile>
      </Overlay>
    </Wrapper>
  )
}

Image.propTypes = {
  id: PropTypes.string,
}

export default observer(Image)
