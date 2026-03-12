import { Button } from "../../../components/Button"

export default function Dashboard() {
    return (
        <div>
            <h1>Profile</h1>
            <ul className="list-inside space-y- gap-6 bg-gray-200 p-4">
                <li>Name:</li>
                <li>Course:</li>
                <li>Semester:</li>
            </ul>
            <Button variant="common" href="/">VoltarHome</Button>
        </div>
    );
}