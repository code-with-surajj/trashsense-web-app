
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, Trash2, Plus, Search, User, Users, Shield } from "lucide-react";

// Mock user data
const initialUsers = [
  { id: 1, name: "Admin User", email: "admin@trashsense.com", role: "admin", lastLogin: "2025-05-03 14:23" },
  { id: 2, name: "John Technician", email: "john@trashsense.com", role: "technician", lastLogin: "2025-05-02 09:45" },
  { id: 3, name: "Sarah Viewer", email: "sarah@trashsense.com", role: "viewer", lastLogin: "2025-05-01 11:30" },
  { id: 4, name: "Mike Manager", email: "mike@trashsense.com", role: "admin", lastLogin: "2025-04-30 16:15" },
  { id: 5, name: "Lisa Tech", email: "lisa@trashsense.com", role: "technician", lastLogin: "2025-04-29 10:20" },
  { id: 6, name: "Tom Observer", email: "tom@trashsense.com", role: "viewer", lastLogin: "2025-04-28 13:45" },
  { id: 7, name: "Emma Admin", email: "emma@trashsense.com", role: "admin", lastLogin: "2025-04-27 09:30" },
  { id: 8, name: "James Viewer", email: "james@trashsense.com", role: "viewer", lastLogin: "2025-04-26 14:10" },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "viewer",
    password: ""
  });

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    switch(role) {
      case "admin":
        return <Shield className="h-4 w-4 text-primary" />;
      case "technician":
        return <Users className="h-4 w-4 text-secondary" />;
      default:
        return <User className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getRoleClass = (role: string) => {
    switch(role) {
      case "admin":
        return "bg-primary/10 text-primary";
      case "technician":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleAddUser = () => {
    // Validation would go here in a real application
    const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const currentDate = new Date().toISOString().slice(0, 16).replace("T", " ");
    
    setUsers([...users, {
      id, 
      name: newUser.name, 
      email: newUser.email, 
      role: newUser.role, 
      lastLogin: currentDate
    }]);
    
    setIsAddingUser(false);
    setNewUser({ name: "", email: "", role: "viewer", password: "" });
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">User Management</h1>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={() => setIsAddingUser(true)}>
            <Plus className="h-4 w-4 mr-2" /> Add User
          </Button>
        </div>
      </div>

      {isAddingUser && (
        <Card>
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
            <CardDescription>Create a new user account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <select
                    id="role"
                    className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  >
                    <option value="viewer">Viewer</option>
                    <option value="technician">Technician</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddingUser(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddUser}>
                  Add User
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>User Accounts</CardTitle>
          <CardDescription>Manage system users and their permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] w-full rounded-md border">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium text-muted-foreground border-b">
                <div className="col-span-3">Name</div>
                <div className="col-span-3">Email</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-2">Last Login</div>
                <div className="col-span-2">Actions</div>
              </div>
              
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <div key={user.id} className="grid grid-cols-12 gap-2 p-4 text-sm border-b hover:bg-muted/50">
                    <div className="col-span-3 font-medium">{user.name}</div>
                    <div className="col-span-3 text-muted-foreground">{user.email}</div>
                    <div className="col-span-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getRoleClass(user.role)}`}>
                        {getRoleIcon(user.role)}
                        <span className="ml-1 capitalize">{user.role}</span>
                      </span>
                    </div>
                    <div className="col-span-2 text-muted-foreground">{user.lastLogin}</div>
                    <div className="col-span-2 flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive" onClick={() => handleDeleteUser(user.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-muted-foreground">No users found</div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
