import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

 
  const removeCandidate = (id: number) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  if (savedCandidates.length === 0) {
    return <div>No candidates have been accepted.</div>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>GitHub</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>
                <img
                  src={candidate.avatar_url}
                  alt={candidate.login}
                  width="50"
                  height="50"
                  style={{ borderRadius: '50%' }}
                />
              </td>
              <td>{candidate.name || candidate.login}</td>
              <td>{candidate.login}</td>
              <td>{candidate.location || 'Not specified'}</td>
              <td>{candidate.email || 'Not specified'}</td>
              <td>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                  {candidate.html_url}
                </a>
              </td>
              <td>{candidate.company || 'Not specified'}</td>
              <td>
                <button onClick={() => removeCandidate(candidate.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;