import { useSelector } from 'react-redux';

const AdminProfile = () => {
        const { currentUser } = useSelector((state) => state.user);
    return (
        <div>
            Name: {currentUser.name}
            <br />
            Email: {currentUser.email}
            <br />
            College: {currentUser.schoolName}
            <br />
        </div>
    )
}
export default AdminProfile