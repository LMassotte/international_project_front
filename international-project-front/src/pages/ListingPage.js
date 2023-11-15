import React, { useState } from 'react';

export default function ListingPage() {
    const [selectedSort, setSelectedSort] = useState('default');
    const handleSortChange = (sortCriteria) => {
        setSelectedSort(sortCriteria);
      };
    return (
        <div></div>
    )
}
