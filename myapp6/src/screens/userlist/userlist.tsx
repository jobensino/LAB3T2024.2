import { ThemedText } from '@/src/cp/ThemedText';
import { ThemedView } from '@/src/cp/ThemedView';
import { DZSQLiteSelect } from '@/src/db/drizzlesqlite';
import { usersTable } from '@/src/db/schema';
import { TUserAttr } from '@/src/model/user';
import { useContextUser, UserActionTypes } from '@/src/state/user';
import { useEffect } from 'react';
import { FlatList, View } from 'react-native';

type UserListProps = {
    user:TUserAttr
}

export function UserListScreen() 
{
    const {state,dispatch} = useContextUser()
    
    const separator = () => {
        //add a seperator component for each item with green color:
        return <Divider width={1} color="#848483"  />;
    };
      
    const handleEmpty = () => {
        return <ThemedText type="defaultSemiBold">No data present!</ThemedText>;
    };

    const ItemRenderer = ({user}:UserListProps) => {
        return  (
            <ThemedView key={user.id}>
                <ThemedText type="defaultSemiBold">{user.name}</ThemedText>
                <ThemedText type="default">{user.email}</ThemedText>
            </ThemedView>
        )
    } 

    useEffect( ()=> {
        const fetchData = async()=> {
        const data = await DZSQLiteSelect<TUserAttr>(usersTable);
        dispatch({ type: UserActionTypes.ADD_USER, payload: [...data] });
        }
        fetchData()
        }
        ,[] )
            
    return (
        <ThemedView >
            <FlatList data={state.users} 
                      renderItem={({item}) => <ItemRenderer user={item} />} 
                      ItemSeparatorComponent={separator}
                      ListEmptyComponent={handleEmpty}
                      keyExtractor={item => item.id} />
        </ThemedView>
    )
}

interface DividerProps {
 width?: number;
 orientation?: 'horizontal' | 'vertical';
 color?: string;
 dividerStyle?: any;
}

const Divider: React.FC<DividerProps> = ({
 width = 1,
 orientation = 'horizontal',
 color = '#DFE4EA',
 dividerStyle,
}) => {
 const dividerStyles = [
   {width: orientation === 'horizontal' ? '100%' : width},
   {height: orientation === 'vertical' ? '100%' : width},
   {backgroundColor: color},
   dividerStyle,
 ];

 return <View style={dividerStyles} />;
};
