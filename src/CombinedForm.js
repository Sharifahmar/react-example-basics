import React, { Component, Suspense } from 'react'

const SelectFormComponent = React.lazy(() => import('./SelectForm'));
const ListItemsComponent = React.lazy(() => import('./ListItems'));

export class CombinedForm extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <SelectFormComponent />
                    <ListItemsComponent numberList={numbers} />
                </Suspense>
            </div>
        )
    }
}

export default CombinedForm
