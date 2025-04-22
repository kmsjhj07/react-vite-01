// TODO: name, age props로 변경해 처리하도록 수정하세요.
// TODO: App.tsx 에서 profiles 배열을 만들어서 map 함수로 반복 랜더링 처리하도록 수정하세요.

interface Props {
    name: string;
    age: number;
}

const Profile = ({ name, age }: Props) => {
    return (
        <div>
            <h1>안녕하세요. {name}입니다.</h1>
            <p>나이: {age}</p>
        </div>
    );
}

export default Profile;