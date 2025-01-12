import React from 'react';
import CategoryTab from '../CategoryTab';

function JobOfTheDaySection() {
    return (
        <section className="section-box mt-50">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Jobs of the day</h2>
                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster. </p>
                </div>
                <div className="mt-70">
                    <CategoryTab />
                </div>
            </div>
        </section>
    );
};
export default React.memo(JobOfTheDaySection);