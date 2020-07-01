<template>
    <div>
        <el-table :data='tableData'>
            <el-table-column
                v-for='(column,index) in columns'
                :key='index'
                :label='column.label'
                :width="column.width">
                <template slot-scope="scope">
                    <span v-if='!column.render'>{{scope.row[column.prop]}}</span>
                    <custom-col
                        v-else
                        :row='scope.row'
                        :render='column.render'
                    ></custom-col>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang='ts'>
    import { Component, Vue, Prop } from 'vue-property-decorator';
    const customCol = {
        functional: true,
        props: {
            row: {
                type: Object,
                default() {
                    return {};
                },
            },
            render: {
                type: Function,
                default() {
                    return (h: (label: string, attribute: object, content: string | any[]) => any, row: any) => {
                        return h('span', {}, row.label);
                    };
                },
            },
        },
        render: (h: (label: string, attribute: object, content: string | any[]) => any, data: any) => {
            return data.props.render(h, data.props.row);
        },
    };
    @Component({
        components: { customCol },
    })
    export default class Table extends Vue {
        @Prop({ default: [] })
        private columns: any[];

        @Prop({ default: [] })
        private tableData: any[];
    }
</script>

<style scoped lang='scss'></style>