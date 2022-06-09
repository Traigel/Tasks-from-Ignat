import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairType = Array<{
    _id: number,
    name: string,
    priority: AffairPriorityType
}>
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType, filter: FilterType): AffairType =>
    filter === 'all' ? affairs : affairs.filter(el => el.priority === filter)

export const deleteAffair = (affairs: AffairType, _id: number): AffairType =>
    affairs.filter(u => u._id !== _id)

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs) // need to fix any

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))// need to fix any

    const [filter, setFilter] = useState<FilterType>('all')

    const setFilterHandler = (filterTitle: FilterType) => setFilter(filterTitle)

    const filteredAffairs = filterAffairs(affairs, filter)

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilterHandler={setFilterHandler}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
