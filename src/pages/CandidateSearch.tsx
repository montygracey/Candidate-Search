import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      console.log('Fetched candidates:', data); // Debugging
      if (data.length > 0) {
        setCandidates(data);
        setCandidate(data[0]);
      } else {
        console.log('No candidates found.'); // Debugging
      }
    };
    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
      nextCandidate();
    }
  };

  const nextCandidate = async () => {
    if (candidates.length > 1) {
      
      setCandidates(candidates.slice(1));
      setCandidate(candidates[1]);
    } else if (candidates.length === 1) {
     
      const newCandidates = await searchGithub();
      if (newCandidates.length > 0) {
        setCandidates(newCandidates);
        setCandidate(newCandidates[0]);
      } else {
        
        setCandidate(null);
      }
    } else {
     
      setCandidate(null);
    }
  };

  if (!candidate) {
    return <div>No more candidates available to review.</div>;
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <div>
        <img src={candidate.avatar_url} alt={candidate.login} width="100" />
        <h2>{candidate.name || candidate.login}</h2>
        <p>Username: {candidate.login}</p>
        <p>Location: {candidate.location || 'Not specified'}</p>
        <p>Email: {candidate.email || 'Not specified'}</p>
        <p>GitHub: <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.html_url}</a></p>
        <p>Company: {candidate.company || 'Not specified'}</p>
      </div>
      <button className="save-button" onClick={handleSaveCandidate}>+ Save</button>
      <button className="skip-button" onClick={nextCandidate}>- Skip</button>
    </div>
  );
};

export default CandidateSearch;