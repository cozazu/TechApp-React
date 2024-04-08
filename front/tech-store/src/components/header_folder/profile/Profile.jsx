import styled from "styled-components";

const ImageContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`
const Image = styled.img`
    width: calc(100% - 20px);
    height: auto;
`  

function Profile () {
    return (
        <ImageContainer>
            <Image src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
            <h1>Profile</h1>
        </ImageContainer>
    );
}

export default Profile;