import React from 'react';

const SyncButton = ({ onClick, loading }) => {
  return (
    <button className='btn' onClick={onClick} disabled={loading}>
      {loading ? 'Sincronizando...' : 'Sincronizar Livros'}
    </button>
  );
};

export default SyncButton;
