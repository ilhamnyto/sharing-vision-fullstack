import ArticleTable from "@/components/ArticleTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-xs text-slate-400 border-l-4 pl-2 border-l-slate-300 mb-4">
        All Posts
      </h1>
      <Tabs defaultValue="publish" className="w-full">
        <TabsList className="gap-3 w-full">
          <TabsTrigger value="publish">Published</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="trash">Trashed</TabsTrigger>
        </TabsList>
        <TabsContent value="publish">
          <ArticleTable status="publish" />
        </TabsContent>
        <TabsContent value="draft">
          <ArticleTable status="draft" />
        </TabsContent>
        <TabsContent value="trash">
          <ArticleTable status="trash" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
